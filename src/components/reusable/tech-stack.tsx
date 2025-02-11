import StackIcon from 'tech-stack-icons';

interface TechStackProps {
  name: string;
  customIcon?: string;
}

const TechStack = ({ name, customIcon }: TechStackProps) => (
  <div className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/10 transition-all duration-300">
    <div className="relative flex items-center">
      <div className="absolute inset-0 bg-primary/5 rounded-md blur-sm group-hover:bg-primary/15 transition-all duration-300" />
      <div className="relative p-2 rounded-md bg-background border shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
        {customIcon ? (
          <img src={customIcon} alt={name} className="w-5 h-5 object-contain" />
        ) : (
          <StackIcon name={name.toLowerCase()} className="w-5 h-5" />
        )}
      </div>
    </div>
    <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
      {name}
    </span>
  </div>
);

export default TechStack;
