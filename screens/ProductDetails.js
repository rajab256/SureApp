import {
  StyleSheet,
  Text,
  FlatList,
  useWindowDimensions,
  Image,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import products from "../data/products";

const ProductDetails = () => {
  const product = products[0];
  const { width } = useWindowDimensions();

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 32, fontWeight: "500", marginVertical: 10 },
  price: { fontWeight: "500", fontSize: 18, letterSpacing: 1 },
  description: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: { color: "white", fontWeight: "500", fontSize: 16 },
});

export default ProductDetails;