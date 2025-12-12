import React from 'react';
import Select from '../../../components/ui/Select';


const GlobalControls = ({ 
  dateRange, 
  onDateRangeChange, 
  customerSegment, 
  onCustomerSegmentChange,
  activeProcessing 
}) => {
  const dateRangeOptions = [
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' }
  ];

  const segmentOptions = [
    { value: 'all', label: 'All Customers' },
    { value: 'premium', label: 'Premium Tier' },
    { value: 'standard', label: 'Standard Tier' },
    { value: 'new', label: 'New Customers' },
    { value: 'returning', label: 'Returning Customers' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="flex-1 min-w-[200px]">
            <Select
              label="Date Range"
              options={dateRangeOptions}
              value={dateRange}
              onChange={onDateRangeChange}
            />
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <Select
              label="Customer Segment"
              options={segmentOptions}
              value={customerSegment}
              onChange={onCustomerSegmentChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg border border-border">
          <div className="relative">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Live Processing</span>
            <span className="text-xs text-muted-foreground">{activeProcessing} active analyses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalControls;