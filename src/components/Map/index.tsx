import { useRef } from "react";
import styles from "./index.module.scss";
import { YMaps, Map, Placemark, YMapsApi } from "react-yandex-maps";

const MapScreen = () => {
  const ymaps = useRef<any>();
  const defaultState = {
    center: [41.311153, 69.279729],
    zoom: 12,
  };

  // console.log("first");

  return (
    <YMaps>
      <div className={styles.map__block}>
        <p className={styles.title}>Укажите адрес доставки</p>
        <Map
          modules={["control.SearchControl"]}
          onLoad={(ymapsInstance: YMapsApi) => {
            ymaps.current = ymapsInstance;
            // addSearchControlEvents();
          }}
          defaultState={defaultState}
          // height="300px"
          // width={"720px"}
          className={styles.map}
        >
          <Placemark geometry={[41.311153, 69.279729]} />
        </Map>
      </div>
    </YMaps>
  );
};
export default MapScreen;
