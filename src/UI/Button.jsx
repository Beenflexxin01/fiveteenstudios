import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base = `focus: rounded-full bg-yellow-400 
  font-semibold uppercase tracking-wide text-stone-800 ring-offset-2
  transition-colors duration-300 hover:bg-yellow-300 focus:inline-block
  focus:outline-none focus:ring focus:ring-yellow-300
  disabled:cursor-not-allowed text-sm`;

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary: `text-sm rounded-full border-2 border-stone-300
    font-semibold uppercase tracking-wide text-stone-400 ring-offset-2
    transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:inline-block
    focus:outline-none focus:ring-stone-200 focus:ring focus:text-stone-800
    disabled:cursor-not-allowed  px-4 py-2.5 md:px-6 md:py-4,
    px-4 py-2 md:px-5 md:py-3.5 text-xs `,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;