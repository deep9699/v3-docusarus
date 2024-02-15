import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

async function hashString(inputString) {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputString);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

export function onRouteDidUpdate({ location, previousLocation }) {
  if (ExecutionEnvironment.canUseDOM) {
    console.log("from canUseDom");
    const originalString = "vshah51";

    hashString(originalString)
      .then((hash) => {
        console.log("Original String:", originalString);
        console.log("Hashed String:", hash);
      })
      .catch((error) => console.error("Error:", error));
  }
}
