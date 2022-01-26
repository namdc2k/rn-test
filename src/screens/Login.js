// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import SQLite from "react-native-sqlite-storage";
// const db = SQLite.openDatabase(
//   {
//     name: "MainDB",
//     location: "default",
//   },
//   () => {},
//   (error) => {
//     console.log(error);
//   }
// );

// export default function Login() {
//   const [User, setUser] = useState("");
//   const [Password, setPassword] = useState("");

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     try {
//       db.transaction((tx) => {
//         tx.executeSql("SELECT User, Password FROM Users", [], (tx, results) => {
//           var len = results.rows.length;
//           if (len > 0) {
//             navigation.navigate("Home");
//           }
//         });
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>Project 3</Text>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Name"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => state.this(email)}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           secureTextEntry
//           style={styles.inputText}
//           placeholder="Password..."
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => state.this(password)}
//         />
//       </View>
//       <TouchableOpacity>
//         <Text style={styles.forgot}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.loginText}>Signup</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#003f5c",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     fontWeight: "bold",
//     fontSize: 40,
//     color: "#fb5b5a",
//     marginBottom: 40,
//   },
//   inputView: {
//     width: "80%",
//     backgroundColor: "#465881",
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20,
//   },
//   inputText: {
//     height: 50,
//     color: "white",
//   },
//   forgot: {
//     color: "white",
//     fontSize: 11,
//   },
//   loginBtn: {
//     width: "40%",
//     backgroundColor: "#fb5b5a",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "white",
//   },
// });
