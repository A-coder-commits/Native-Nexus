import { AntDesign, EvilIcons, Ionicons, Feather, MaterialIcons} from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";


function ProfileScreen() {
    return <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>Account</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 6, gap: 8 }}>
            <View style={{ height: 80, width: 80, backgroundColor: 'red', borderRadius: 100 }}>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Aditi Dixit</Text>
                <Text style={{ fontSize: 14 }}>aditid092@gmail.com</Text>
            </View>
            <View style={{ borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
                <Pressable>
                    <EvilIcons name="pencil" size={24} color="black" />
                </Pressable>
            </View>

        </View>

        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }} />

        <View style={{ paddingVertical: 16, gap: 20 }}>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="qr-code-outline" size={32} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Scan Code</Text>
                </View>
            </View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="diamond" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Splitwise Pro</Text>
                </View>
            </View>
            
        
        <Text style={{ fontSize: 24, fontWeight: "500" }}>Preferences</Text>
        <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="mail" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Mail Settings</Text>
                </View>
            </View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                <Feather name="bell" size={28} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Device and push notifications</Text>
                </View>
            </View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <EvilIcons name="lock" size={34} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Security</Text>
                </View>
            </View> 
            <Text style={{ fontSize: 24, fontWeight: "500" }}>Feedback</Text>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="star" size={28} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Rate Splitwise</Text>
                </View>
            </View>
    
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <AntDesign name="contacts" size={28} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Contact Splitwise Support</Text>
                </View>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }} />
            <View style={{ gap: 2, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <MaterialIcons name="logout" size={28} color="lightgreen" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16,color:"lightgreen"}}>Log Out</Text>
                </View>
            </View>
    </View>
</View>




}

export default ProfileScreen;