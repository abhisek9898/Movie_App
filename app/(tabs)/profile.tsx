import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";

const Profile = () => {
  const favoriteMovies = [
    {
      movie_id: 1,
      title: "Moana 2",
      poster_url:
        "https://www.themoviedb.org/t/p/w1280/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    },
    {
      movie_id: 2,
      title: "The Wheel of Time",
      poster_url:
        "https://www.themoviedb.org/t/p/w1280/eVm7vI0VTUKYzgpOXCUu9qz3L4E.jpg",
    },
    {
      movie_id: 3,
      title: "Mickey 17",
      poster_url:
        "https://www.themoviedb.org/t/p/w1280/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
    },
  ];
  const loading = false;
  const error = null;

  return (
    <SafeAreaView className="bg-primary flex-1 px-5">
      <View className="items-center mt-10">
        <Image
          source={icons.person}
          className="w-20 h-20 mb-3"
          tintColor="#fff"
        />
        <Text className="text-white text-lg font-bold">Abhisek</Text>
        <Text className="text-gray-400 text-sm">mail@abhisekmalla.in</Text>
      </View>

      <Text className="text-white text-lg font-bold mt-8">Favorite Movies</Text>
      {loading ? (
        <Text className="text-gray-400">Loading...</Text>
      ) : error ? (
        <Text className="text-red-500">Failed to load movies</Text>
      ) : (
        <FlatList
          data={favoriteMovies}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.movie_id.toString()}
          renderItem={({ item }) => (
            <View className="mr-4 mt-3">
              <Image
                source={{ uri: item.poster_url }}
                className="w-24 h-36 rounded-lg"
              />
              <Text className="text-white text-sm mt-2">{item.title}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity className="bg-gray-700 mb-16 py-3 rounded-lg items-center">
        <Text className="text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
