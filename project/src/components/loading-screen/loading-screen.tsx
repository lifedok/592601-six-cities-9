import './loading-screen.styles.css';
import { gerRandomNumber } from '../../helpers/hepler';

export default function LoadingScreen(): JSX.Element {
  return (
    <div className="loading-screen" data-testid="loading">
      <div className="loading-screen__spinner">
        {
          new Array(12).fill(null).map((i) => <div key={gerRandomNumber()}/>)
        }
      </div>
    </div>
  );
}
