import React from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const CorrelationMatrix = () => {
  const correlationData = [
    { 
      metric: 'Customer Satisfaction', 
      sentiment: 85, 
      businessImpact: 92, 
      size: 450,
      significance: 'High',
      correlation: 0.89,
      description: 'Strong positive correlation between sentiment scores and customer satisfaction ratings'
    },
    { 
      metric: 'Retention Rate', 
      sentiment: 78, 
      businessImpact: 88, 
      size: 380,
      significance: 'High',
      correlation: 0.82,
      description: 'Positive sentiment strongly predicts customer retention'
    },
    { 
      metric: 'Revenue Growth', 
      sentiment: 82, 
      businessImpact: 85, 
      size: 420,
      significance: 'High',
      correlation: 0.76,
      description: 'Customer sentiment correlates with revenue performance'
    },
    { 
      metric: 'Support Tickets', 
      sentiment: 45, 
      businessImpact: 38, 
      size: 320,
      significance: 'Medium',
      correlation: -0.68,
      description: 'Negative correlation: lower sentiment increases support volume'
    },
    { 
      metric: 'Churn Risk', 
      sentiment: 35, 
      businessImpact: 28, 
      size: 280,
      significance: 'High',
      correlation: -0.85,
      description: 'Strong negative correlation: poor sentiment predicts churn'
    },
    { 
      metric: 'Product Adoption', 
      sentiment: 88, 
      businessImpact: 90, 
      size: 460,
      significance: 'High',
      correlation: 0.91,
      description: 'Highest correlation: positive sentiment drives feature adoption'
    },
    { 
      metric: 'NPS Score', 
      sentiment: 80, 
      businessImpact: 86, 
      size: 400,
      significance: 'High',
      correlation: 0.84,
      description: 'Net Promoter Score closely tracks sentiment patterns'
    },
    { 
      metric: 'Upsell Success', 
      sentiment: 75, 
      businessImpact: 72, 
      size: 350,
      significance: 'Medium',
      correlation: 0.65,
      description: 'Moderate correlation between sentiment and upsell conversion'
    }
  ];

  const getSignificanceColor = (significance) => {
    switch (significance) {
      case 'High':
        return '#3B82F6';
      case 'Medium':
        return '#F59E0B';
      case 'Low':
        return '#94A3B8';
      default:
        return '#94A3B8';
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-popover border border-border rounded-lg p-4 shadow-lg max-w-xs">
          <p className="text-sm font-semibold text-foreground mb-2">{data?.metric}</p>
          <div className="space-y-2 text-xs">
            <p className="text-muted-foreground">
              Correlation: <span className="text-foreground font-medium">{data?.correlation}</span>
            </p>
            <p className="text-muted-foreground">
              Sentiment Score: <span className="text-foreground font-medium">{data?.sentiment}%</span>
            </p>
            <p className="text-muted-foreground">
              Business Impact: <span className="text-foreground font-medium">{data?.businessImpact}%</span>
            </p>
            <p className="text-muted-foreground">
              Significance: <span className="text-foreground font-medium">{data?.significance}</span>
            </p>
            <p className="text-muted-foreground mt-2 pt-2 border-t border-border">
              {data?.description}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Icon name="GitBranch" size={20} />
            Correlation Matrix
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Relationships between sentiment scores and business outcomes
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Info" size={14} />
          <span>Statistical significance indicators</span>
        </div>
      </div>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
            <XAxis 
              type="number" 
              dataKey="sentiment" 
              name="Sentiment Score"
              domain={[0, 100]}
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
              stroke="var(--color-border)"
              label={{ 
                value: 'Sentiment Score (%)', 
                position: 'bottom', 
                offset: 40,
                style: { fill: 'var(--color-muted-foreground)', fontSize: 12 }
              }}
            />
            <YAxis 
              type="number" 
              dataKey="businessImpact" 
              name="Business Impact"
              domain={[0, 100]}
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
              stroke="var(--color-border)"
              label={{ 
                value: 'Business Impact (%)', 
                angle: -90, 
                position: 'left',
                offset: 40,
                style: { fill: 'var(--color-muted-foreground)', fontSize: 12 }
              }}
            />
            <ZAxis type="number" dataKey="size" range={[100, 500]} />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px', color: 'var(--color-muted-foreground)' }}
            />
            <Scatter 
              name="Business Metrics" 
              data={correlationData}
              shape="circle"
            >
              {correlationData?.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getSignificanceColor(entry?.significance)}
                  opacity={0.8}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-xs text-muted-foreground">High Significance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-warning"></div>
          <span className="text-xs text-muted-foreground">Medium Significance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
          <span className="text-xs text-muted-foreground">Low Significance</span>
        </div>
      </div>
    </div>
  );
};

export default CorrelationMatrix;