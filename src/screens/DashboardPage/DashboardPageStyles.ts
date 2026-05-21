import { StyleSheet } from "react-native";
import { colors, sizes } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: sizes.md,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: sizes.xxl,
    fontWeight: "700",
    color: colors.black,
    marginBottom: sizes.sm,
  },
  subtitle: {
    textAlign: "center",
    fontSize: sizes.lg,
    color: colors.gray400,
    marginBottom: sizes.md,
  },
  counter: {
    textAlign: "center",
    fontSize: sizes.md,
    color: colors.black,
    marginBottom: sizes.md,
    fontWeight: "600",
  },
  recentBar: {
    width: "100%",
    paddingVertical: sizes.md,
    paddingHorizontal: sizes.md,
    borderRadius: sizes.radiusMd,
    backgroundColor: colors.gray100,
    marginTop: sizes.xl,
    alignItems: "center",
  },
  recentText: {
    fontSize: sizes.md,
    color: colors.primary,
    fontWeight: "700",
  },
  productList: {
    width: "100%",
    paddingTop: sizes.md,
  },
  productCard: {
    width: "100%",
    padding: sizes.md,
    borderRadius: sizes.radiusMd,
    backgroundColor: colors.gray100,
    marginTop: sizes.sm,
  },
  productName: {
    fontSize: sizes.lg,
    fontWeight: "700",
    color: colors.black,
  },
  productMeta: {
    fontSize: sizes.md,
    color: colors.gray400,
    marginTop: sizes.xs,
  },
  emptyText: {
    textAlign: "center",
    color: colors.gray400,
    marginTop: sizes.md,
  },
});
