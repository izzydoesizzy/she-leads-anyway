import React from "react";

const TrustBar: React.FC = () => {
  const trustElements = [
    "30+ Years Corporate Leadership",
    "Former HR Executive",
    "Million-Dollar Portfolio Management",
    "Crisis Leadership Expert",
    "Proprietary BOLD™ Method"
  ];

  return (
    <section className="border-t bg-muted/30">
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {trustElements.map((element, index) => (
            <React.Fragment key={element}>
              <span className="whitespace-nowrap">{element}</span>
              {index < trustElements.length - 1 && (
                <div className="h-1 w-1 rounded-full bg-primary/40" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;