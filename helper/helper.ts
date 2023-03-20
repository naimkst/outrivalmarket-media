export function showImage(item: any) {
  {
    if (item) {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.data?.attributes?.url}`;
    } else {
      ("");
    }
  }
}
