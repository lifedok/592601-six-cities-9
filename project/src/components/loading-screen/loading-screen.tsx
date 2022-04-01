import './loading-screen.styles.css';

export default function LoadingScreen(): JSX.Element {
  return (
    <div className="loading-screen">
      <div className="loading-screen__spinner">
        {
          new Array(12).fill(null).map((i) => <div key={i}/>)
        }
      </div>
    </div>
  );
}
