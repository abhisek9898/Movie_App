import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

interface Movie {
  movie_id: number;
  title: string;
  poster_url: string;
}

const Profile = () => {
  const favoriteMovies: Movie[] = [
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

  const renderMovieItem = ({ item }: { item: Movie }): JSX.Element => (
    <View className="mr-4 mt-3">
      <Image
        source={{ uri: item.poster_url }}
        className="w-24 h-36 rounded-lg"
      />
      <Text className="text-white text-sm mt-2 text-center">{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full"
        resizeMode="cover"
      />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      >
        <View className="mt-5 flex-row justify-end">
          <TouchableOpacity>
            <Image
              source={icons.setting}
              className="w-6 h-6"
              tintColor="#fff"
            />
          </TouchableOpacity>
        </View>
        <View className="items-center mt-10">
          <Image
            source={images.businessman}
            className="w-20 h-20 rounded-full mb-3"
            tintColor="#fff"
          />
          <Text className="text-white text-4xl font-bold">Abhisek</Text>
          <Text className="text-gray-400 text-lg">mail@abhisekmalla.in</Text>
        </View>
        <View className="mt-10">
          <Text className="text-white text-lg font-bold mb-3">
            Favorite Movies
          </Text>
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
              renderItem={renderMovieItem}
              contentContainerStyle={{ paddingLeft: 10 }}
            />
          )}
        </View>
        <View className="mt-10">
          <Text className="text-white text-lg font-bold mb-3">
            Continue Watching
          </Text>
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
              renderItem={renderMovieItem}
              contentContainerStyle={{ paddingLeft: 10 }}
            />
          )}
        </View>
        <TouchableOpacity className="bg-[#1a173e] py-3 px-5 rounded-xl flex-row items-center justify-center mt-10 mb-5">
          <Image source={icons.logout} className="w-5 h-5" tintColor="#fff" />
          <Text className="text-white font-bold text-base ml-2">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
