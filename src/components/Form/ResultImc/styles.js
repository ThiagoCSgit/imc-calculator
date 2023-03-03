import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 30,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  imcValue: {
    fontSize: 48,
    color: "#ff0043",
    fontWeight: 700,
  },
  message: {
    fontSize: 18,
    color: "#ff0043",
    fontWeight: 700,
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
  },
  share: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingVertical: 10,
    marginTop: 15
  },
  sharedText: {
    color: "#fff",
    fontWeight: 700,
    paddingHorizontal: 30,
  },
});

export default styles;
