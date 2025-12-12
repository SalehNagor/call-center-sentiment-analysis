import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import MetricCard from './components/MetricCard';
import PerformanceChart from './components/PerformanceChart';
import PerformanceTable from './components/PerformanceTable';
import SystemHealthGauge from './components/SystemHealthGauge';
import AlertPanel from './components/AlertPanel';
import ConnectionStatus from './components/ConnectionStatus';

import Button from '../../components/ui/Button';

const PerformanceAnalytics = () => {
  const [lastUpdate, setLastUpdate] = useState('just now');
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const seconds = now?.getSeconds();
      setLastUpdate(`${seconds}s ago`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const kpiMetrics = [
    {
      title: "Processing Speed",
      value: "2.3",
      unit: "sec/file",
      change: -12,
      changeType: "negative",
      icon: "Zap",
      iconColor: "var(--color-primary)",
      threshold: 3.0
    },
    {
      title: "Transcription Accuracy",
      value: "96.8",
      unit: "%",
      change: 2.4,
      changeType: "positive",
      icon: "Target",
      iconColor: "var(--color-success)",
      threshold: 95.0
    },
    {
      title: "Sentiment Confidence",
      value: "94.2",
      unit: "%",
      change: 1.8,
      changeType: "positive",
      icon: "TrendingUp",
      iconColor: "var(--color-warning)",
      threshold: 90.0
    },
    {
      title: "Script Adherence Rate",
      value: "91.5",
      unit: "%",
      change: 3.2,
      changeType: "positive",
      icon: "ClipboardCheck",
      iconColor: "var(--color-success)",
      threshold: 85.0
    }
  ];

  const chartData = [
    { time: "00:00", filesUploaded: 156, filesProcessed: 145, accuracy: 96.2, scriptAdherence: 89.5 },
    { time: "04:00", filesUploaded: 95, filesProcessed: 89, accuracy: 96.5, scriptAdherence: 90.2 },
    { time: "08:00", filesUploaded: 342, filesProcessed: 312, accuracy: 95.8, scriptAdherence: 88.7 },
    { time: "12:00", filesUploaded: 468, filesProcessed: 428, accuracy: 96.1, scriptAdherence: 91.8 },
    { time: "16:00", filesUploaded: 421, filesProcessed: 389, accuracy: 96.9, scriptAdherence: 92.4 },
    { time: "20:00", filesUploaded: 289, filesProcessed: 267, accuracy: 97.2, scriptAdherence: 93.1 },
    { time: "23:59", filesUploaded: 215, filesProcessed: 198, accuracy: 96.8, scriptAdherence: 91.5 }
  ];

  const chartMetrics = [
    { key: "filesUploaded", label: "Files Uploaded", color: "var(--color-primary)", unit: " files" },
    { key: "filesProcessed", label: "Files Processed", color: "var(--color-success)", unit: " files" },
    { key: "accuracy", label: "Accuracy", color: "var(--color-warning)", unit: "%" },
    { key: "scriptAdherence", label: "Script Adherence", color: "#8b5cf6", unit: "%" }
  ];

  const performanceData = [
    {
      format: "MP3",
      avgSize: "3.2 MB",
      processingTime: 2.1,
      accuracy: 97.2,
      filesProcessed: 1847,
      errorRate: 0.8
    },
    {
      format: "WAV",
      avgSize: "12.8 MB",
      processingTime: 3.4,
      accuracy: 98.1,
      filesProcessed: 892,
      errorRate: 0.4
    },
    {
      format: "M4A",
      avgSize: "4.1 MB",
      processingTime: 2.3,
      accuracy: 96.8,
      filesProcessed: 1234,
      errorRate: 1.2
    },
    {
      format: "FLAC",
      avgSize: "18.5 MB",
      processingTime: 4.2,
      accuracy: 98.5,
      filesProcessed: 456,
      errorRate: 0.3
    },
    {
      format: "OGG",
      avgSize: "2.9 MB",
      processingTime: 2.0,
      accuracy: 95.9,
      filesProcessed: 678,
      errorRate: 1.5
    }
  ];

  const tableColumns = [
    { key: "format", label: "Format", sortable: true },
    { key: "avgSize", label: "Avg Size", sortable: false },
    { 
      key: "processingTime", 
      label: "Processing Time", 
      sortable: true, 
      unit: "s",
      threshold: 3.0,
      type: "negative"
    },
    { 
      key: "accuracy", 
      label: "Accuracy", 
      sortable: true, 
      unit: "%",
      threshold: 96.0,
      type: "positive"
    },
    { key: "filesProcessed", label: "Files Processed", sortable: true },
    { 
      key: "errorRate", 
      label: "Error Rate", 
      sortable: true, 
      unit: "%",
      threshold: 1.0,
      type: "negative"
    }
  ];

  const systemHealthData = [
    {
      title: "CPU Usage",
      value: 68,
      max: 100,
      unit: "%",
      icon: "Cpu",
      thresholds: { warning: 70, critical: 85 }
    },
    {
      title: "Memory",
      value: 12.4,
      max: 16,
      unit: "GB",
      icon: "HardDrive",
      thresholds: { warning: 75, critical: 90 }
    },
    {
      title: "API Response",
      value: 142,
      max: 500,
      unit: "ms",
      icon: "Gauge",
      thresholds: { warning: 60, critical: 80 }
    }
  ];

  const alertsData = [
    {
      severity: "critical",
      title: "High Frustration Detected",
      description: "15% of processed calls showing frustrated sentiment, exceeding 10% threshold",
      time: "2 min ago",
      resolution: "Investigating common frustration triggers in call patterns"
    },
    {
      severity: "warning",
      title: "Processing Queue Building",
      description: "Current queue has 47 files awaiting processing",
      time: "15 min ago",
      resolution: "Auto-scaling triggered, additional resources allocated"
    },
    {
      severity: "critical",
      title: "Transcription Accuracy Drop",
      description: "Accuracy fell to 95.8% during peak hours, below 96% threshold",
      time: "4 hours ago",
      resolution: "Model recalibration completed, accuracy restored"
    },
    {
      severity: "info",
      title: "System Maintenance Scheduled",
      description: "Routine maintenance window scheduled for 12/05/2025 02:00 AM EST",
      time: "1 hour ago",
      resolution: "Notification sent to all users"
    },
    {
      severity: "warning",
      title: "Storage Capacity Alert",
      description: "Audio archive storage at 78% capacity, approaching 80% threshold",
      time: "3 hours ago",
      resolution: "Archive cleanup scheduled for tonight"
    }
  ];

  const handleExportReport = () => {
    console.log("Exporting performance report...");
  };

  const handleExportLogs = () => {
    console.log("Exporting system logs...");
  };

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-background">
        <div className="container mx-auto p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Post-Call Performance Analytics</h1>
              <p className="text-muted-foreground">Batch processing monitoring for system efficiency and AI model accuracy</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <ConnectionStatus isConnected={isConnected} lastUpdate={lastUpdate} />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                  onClick={handleExportReport}
                >
                  Export Report
                </Button>
                <Button
                  variant="outline"
                  iconName="FileText"
                  iconPosition="left"
                  onClick={handleExportLogs}
                >
                  Export Logs
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpiMetrics?.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-9">
              <PerformanceChart data={chartData} metrics={chartMetrics} />
            </div>
            <div className="lg:col-span-3 space-y-4">
              {systemHealthData?.map((health, index) => (
                <SystemHealthGauge key={index} {...health} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <PerformanceTable data={performanceData} columns={tableColumns} />
            </div>
            <div className="lg:col-span-4">
              <AlertPanel alerts={alertsData} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PerformanceAnalytics;