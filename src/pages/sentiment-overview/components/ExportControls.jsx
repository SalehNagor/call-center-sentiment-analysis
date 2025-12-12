import React, { useState } from 'react';
import Button from '../../../components/ui/Button';


const ExportControls = ({ onExport }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format) => {
    setIsExporting(true);
    try {
      await onExport(format);
      setTimeout(() => setIsExporting(false), 1500);
    } catch (error) {
      console.error('Export failed:', error);
      setIsExporting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-foreground mb-1">Export Dashboard Data</h3>
          <p className="text-xs text-muted-foreground">Download current view data in your preferred format</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            iconName="FileText"
            iconPosition="left"
            loading={isExporting}
            onClick={() => handleExport('pdf')}
          >
            PDF
          </Button>
          <Button
            variant="outline"
            iconName="Table"
            iconPosition="left"
            loading={isExporting}
            onClick={() => handleExport('csv')}
          >
            CSV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExportControls;