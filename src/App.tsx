import React from 'react';
import { Box, Typography, Paper, Select, MenuItem, FormControl, InputLabel, Button, Chip, Divider, Card, CardContent, Stack, List, ListItem, ListItemIcon, ListItemText, Link, LinearProgress } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const filters = [
  { label: 'City', options: ['All', 'Marikina', 'Calamba', 'Taguig'] },
  { label: 'Measure', options: ['All', 'Turbidity', 'O2', 'Water Level'] },
  { label: 'Date Range', options: ['Today', 'This Week', 'This Month'] },
];

const metrics = [
  { label: 'Total Units Active', value: 12, color: 'success.main' },
  { label: 'Mean Water Level', value: '2.1m', color: 'info.main' },
  { label: 'Mean Turbidity', value: '1.8 NTU', color: 'warning.main' },
  { label: 'Mean O2 Levels', value: '6.5 mg/L', color: 'cyan.main' },
];

const alerts = [
  {
    text: 'Abnormal waste levels at Marikina River.',
    link: '#',
  },
  {
    text: 'Abnormal waste levels at San Juan River, Calamba.',
    link: '#',
  },
];

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#111', p: 4 }}>
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          bgcolor: '#222',
          borderRadius: 4,
          boxShadow: 6,
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#eaeaea', p: 2 }}>
          <img src="https://i.imgur.com/2yaf2wb.png" alt="AquaGuard Logo" style={{ height: 32, marginRight: 16 }} />
          <Typography variant="h5" fontWeight={700} color="#222">
            AquaGuard
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', height: 600 }}>
          {/* Sidebar Filters */}
          <Box sx={{ width: 180, bgcolor: '#222', color: '#fff', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Filters
            </Typography>
            {filters.map((filter) => (
              <FormControl key={filter.label} fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel sx={{ color: '#bbb' }}>{filter.label}</InputLabel>
                <Select label={filter.label} value={filter.options[0]} sx={{ bgcolor: '#333', color: '#fff' }}>
                  {filter.options.map((option) => (
                    <MenuItem value={option} key={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Box>
          {/* Main Map & Alerts */}
          <Box sx={{ flex: 1, bgcolor: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', p: 3 }}>
            <Typography variant="h4" fontWeight={900} color="#fff" alignSelf="flex-start" mb={2}>
              Laguna de Bay
            </Typography>
            {/* Map Placeholder */}
            <Paper elevation={3} sx={{ width: '100%', height: 350, mb: 2, bgcolor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              {/* Replace with actual map/heatmap in production */}
              <img src="https://i.imgur.com/0Qw1QwB.png" alt="Laguna de Bay Heatmap" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
            </Paper>
            {/* Alerts */}
            <Stack spacing={1} width="100%">
              {alerts.map((alert, idx) => (
                <Card key={idx} sx={{ bgcolor: '#8888', color: '#fff', borderRadius: 3, boxShadow: 0, p: 0.5 }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', p: 1.5, pb: '8px !important' }}>
                    <WarningAmberIcon sx={{ color: '#FFD600', mr: 1 }} />
                    <Typography variant="body1" sx={{ flex: 1 }}>
                      {alert.text}{' '}
                      <Link href={alert.link} sx={{ color: '#90caf9', textDecoration: 'underline', fontWeight: 500 }}>
                        See details
                      </Link>
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>
          {/* Metrics & Waste Report */}
          <Box sx={{ width: 260, bgcolor: '#fff', p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {metrics.map((metric) => (
              <Box key={metric.label} sx={{ mb: 1 }}>
                <Typography variant="subtitle1" fontWeight={700} color="#222">
                  {metric.label}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    bgcolor: '#eee',
                    '& .MuiLinearProgress-bar': { bgcolor: metric.color },
                  }}
                />
                <Typography variant="body2" color={metric.color} fontWeight={700} mt={0.5}>
                  {metric.value}
                </Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" fontWeight={700} color="#222" mb={1}>
              Waste Report
            </Typography>
            <Paper variant="outlined" sx={{ bgcolor: '#f5f5f5', p: 1, mb: 1 }}>
              <Typography variant="body2" color="#444" fontWeight={600}>
                Marikina River
              </Typography>
              <Typography variant="body2" color="#666">
                High waste detected. Immediate action required.
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ bgcolor: '#f5f5f5', p: 1 }}>
              <Typography variant="body2" color="#444" fontWeight={600}>
                San Juan River, Calamba
              </Typography>
              <Typography variant="body2" color="#666">
                Abnormal waste levels. Under investigation.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
