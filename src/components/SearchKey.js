export default function SearchKey(pages, location, level) {
  let key = "0";

  const items = location.pathname.split("/");

  // console.log(items, level);

  if (items.length !== 0) {
    pages.forEach((page, index) => {
      if (items[level] === page.url) {
        console.log(location.pathname, items[items.length - 1], page.url);

        key = String(index + 1);

        return false; // break;
      }
    });
  }

  return key;
}
