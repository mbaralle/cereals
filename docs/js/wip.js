function wipBanner() {
  const banner = document.createElement("div");
  banner.classList.add("wip-banner");
  const span = document.createElement("span");
  span.innerText = "🚧Work in progress🚧";
  const link = document.createElement("a");
  link.innerText = "Go back";
  link.href = "/";

  banner.appendChild(span);
  banner.appendChild(link);

  return banner;
}

arts[0].before(wipBanner());
for (const art of arts) {
  art.after(wipBanner());
}
