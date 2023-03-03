import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    marginTop: 30
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    padding: 25,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
    marginTop: 10
  },
  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  formButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
    borderRadius: 50,
  },
  textButton: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: 700,
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "90%",
    height: "50%"
  },
  listImc: {
    marginTop: 20
  },
  resultImcItem: {
    fontSize: 24,
    fontWeight: 700,
    color: "gray",
    height: 50,
    width: "100%",
    paddingRight: 20
  },
  textResultItemList: {
    fontSize: 24,
    fontStyle: "normal"
  }
});

export default styles;
