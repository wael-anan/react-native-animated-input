import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    justifyContent: "flex-end",
    marginVertical: 1
  },
  input: {
    fontSize: 18,
    marginBottom: 30

  },
  bodyContent: {
    borderBottomColor: "black",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  toucheableLineContent: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  label: {
    fontSize: 13,
    paddingBottom: 7,
    color: '#606060',
    fontWeight: '600'
  },
  error: {
    marginBottom: 5,
    color: "#d32f2f",
    fontSize: 13,
    marginTop: 2
  },
  sufix: {
    flexDirection: "column-reverse"
  }
});
