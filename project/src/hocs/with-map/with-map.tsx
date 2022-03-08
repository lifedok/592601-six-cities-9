import {ComponentType} from 'react';
import {useState} from 'react';

type HOCProps = {
  renderMap: (src: string, id: number) => void
};
//
// export default function withMap<T>(Component: ComponentType<T>)
//   : ComponentType<Omit<T, keyof HOCProps>> {
//
//   type ComponentProps = Omit<T, keyof HOCProps>;
//
//   function WithAudioPlayer(props: ComponentProps): JSX.Element {
//     const [activePlayerId, setActivePlayerId] = useState(0);
//     return (
//       <Component
//         {...props as T}
//         renderMap={(src: string, id: number) => (
//           <AudioPlayer
//             src={src}
//             isPlaying={id === activePlayerId}
//             onPlayButtonClick={() => {
//               setActivePlayerId(activePlayerId === id ? -1 : id);
//             }}
//           />
//         )}
//       />
//     );
//   }
//
//   return WithAudioPlayer;
// }
