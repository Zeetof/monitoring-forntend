import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching services data
export const fetchServices = createAsyncThunk(
  'monitoring/fetchServices',
  async () => {
    // In a real application, this would be your API endpoint
    // const response = await fetch('/api/services');
    // const data = await response.json();
    // For demonstration, we'll return mock data
    const data = [
      {
        id: 1,
        name: "pm-server",
        environment: "PROD",
        status: "Running",
        health: "Healthy",
        healthEndpoint: "https://api.systemspecsg.com/services/pm-server/management/health",
        cpu: 77,
        memory: 62,
        uptime: 100,
        downtime: 0,
        controls: ["Start", "Stop"],
        metrics: {
          up: 1440,
          down: 0,
          errors: 2,
          total: 1440,
          averageTimeMs: "124.5ms"
        }
      },
      {
        id: 2,
        name: "database",
        environment: "PROD",
        status: "Stopped",
        health: "Unhealthy",
        healthEndpoint: "https://api.systemspecsg.com/services/database/management/health",
        cpu: 32,
        memory: 64,
        uptime: 97,
        downtime: 3,
        controls: ["Start", "Restart"],
        metrics: {
          up: 1395,
          down: 45,
          errors: 12,
          total: 1440,
          averageTimeMs: "87.2ms"
        }
      },
      {
        id: 3,
        name: "cache",
        environment: "PROD",
        status: "Running",
        health: "Healthy",
        healthEndpoint: "https://api.systemspecsg.com/services/cache/management/health",
        cpu: 63,
        memory: 70,
        uptime: 99,
        downtime: 1,
        controls: ["Start", "Stop"],
        metrics: {
          up: 1425,
          down: 15,
          errors: 5,
          total: 1440,
          averageTimeMs: "45.8ms"
        }
      },
      {
        id: 4,
        name: "worker",
        environment: "PROD",
        status: "Stopped",
        health: "Stopped",
        healthEndpoint: "https://api.systemspecsg.com/services/worker/management/health",
        cpu: 99,
        memory: 42,
        uptime: 80,
        downtime: 20,
        controls: ["Start"],
        metrics: {
          up: 1152,
          down: 288,
          errors: 45,
          total: 1440,
          averageTimeMs: "216.8ms"
        }
      }
    ];
    return data;
  }
);

// Async thunk for updating service status
export const updateServiceStatus = createAsyncThunk(
  'monitoring/updateServiceStatus',
  async ({ serviceId, action }) => {
    // In a real application, this would make an API call
    // const response = await fetch(`/api/services/${serviceId}/${action}`, { method: 'POST' });
    // const data = await response.json();
    // For demonstration, we'll just return the action
    console.log(`Performing action ${action} on service ${serviceId}`);
    return { serviceId, action };
  }
);

const monitoringSlice = createSlice({
  name: 'monitoring',
  initialState: {
    services: [],
    loading: false,
    error: null
  },
  reducers: {
    // Additional synchronous reducers can be added here
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch services
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Update service status
      .addCase(updateServiceStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateServiceStatus.fulfilled, (state, action) => {
        state.loading = false;
        // In a real app, you might update the specific service here
        // For now, we'll just log the action
        console.log('Service action performed:', action.payload);
      })
      .addCase(updateServiceStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { clearError } = monitoringSlice.actions;
export default monitoringSlice.reducer;