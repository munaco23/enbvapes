import React from 'react';

interface SafetyTipProps {
  icon: string;
  text: string;
}

const SafetyTip: React.FC<SafetyTipProps> = ({ icon, text }) => (
  <div className="flex items-start gap-4 p-4 border border-neutral-200 rounded-md bg-white">
    <i className={`fas ${icon} text-gold text-2xl w-8 text-center mt-1`}></i>
    <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
  </div>
);

const SafetyTips: React.FC = () => {
  const tips: SafetyTipProps[] = [
    {
      icon: 'fa-file-alt',
      text: "Always follow the manufacturer's instructions for use and handling of the vaping product.",
    },
    {
      icon: 'fa-power-off',
      text: 'Make sure to turn off your vape (5 clicks) when not using.',
    },
    {
      icon: 'fa-barcode',
      text: 'Verify your purchases through barcode scanning.',
    },
    {
      icon: 'fa-child-reaching',
      text: 'Store the product out of reach of children and pets to prevent accidental ingestion or exposure.',
    },
    {
      icon: 'fa-exclamation-triangle',
      text: 'Avoid using the product if it is damaged or malfunctioning.',
    },
    {
      icon: 'fa-fire-alt',
      text: 'Keep the product away from open flames and other sources of ignition.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-obsidian uppercase tracking-wider">Health & Safety Tips</h2>
          <div className="mx-auto mt-3 h-[2px] w-20 bg-gold"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <SafetyTip key={index} icon={tip.icon} text={tip.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
