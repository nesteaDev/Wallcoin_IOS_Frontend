import React from 'react';
import {View,StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';


type itemType = {
  id: number;
  image: any; // Aquí deberías especificar el tipo adecuado para la imagen
  title: string;
};



const data: any[] = [
  {
    id: 1,
    image: require('../../../assets/slider/Saly-12.png'),
    title: 'Envios',
  },
  {
    id: 2,
    image: require('../../../assets/slider/Saly-31.png'),
    title: 'Recargas',
  },
  {
    id: 3,
    image: require('../../../assets/slider/Saly-45.png'),
    title: 'Pagos',
  },
  // Agrega más objetos de datos según sea necesario
];

const ServiceCarousel = () => {
  const renderItem = ({item} : {item: any}): React.JSX.Element => {
    return (
    <TouchableOpacity
      onPress={() => handleItemSelected(item)}
      activeOpacity={0.8}
      style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
    );
  };

  const handleItemSelected = (item : itemType) => {
    console.log('Servicio seleccionado:', item.title);
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={150}
        layout="default"
        vertical={false}
        loop={true}
        autoplay={true}
        // autoplayDelay={5000}
        autoplayInterval={3000}
        inactiveSlideOpacity={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 60,
  },
  title: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(33, 3, 37, 0.9)',
  },
});

export default ServiceCarousel;
