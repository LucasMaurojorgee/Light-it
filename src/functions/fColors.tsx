export const getColor = (status: string) => {
  if (status === "unknown") {
    return "bg-gray-500";
  }

  if (status === "Alive") {
    return "bg-green-600";
  }

  if (status === "Dead") {
    return "bg-red-600";
  }
};
