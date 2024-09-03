export interface ContainerProps {
    children: React.ReactNode
    className?: string 
}

export interface ButtonProps{
    children:React.ReactNode;
    className?:string;
    type?: 'button' | 'submit' | 'reset';
    text?:string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;

}
export interface CardGridProps {
    children: React.ReactNode
    className?: string
}

export interface ThemeProviderProps {
    children: React.ReactNode;
    toggleTheme?: () => void;
    theme: 'light' | 'dark' | string;    
}

export interface SectionProps {
    children: React.ReactNode
    className?: string
  }

export interface CardProps {
    theme: 'light' | 'dark' | string
    toggleTheme: () => void
}