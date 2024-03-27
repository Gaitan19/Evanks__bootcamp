const options = document.querySelectorAll(".Updates-option");
const containers = document.querySelectorAll(".Updates-items");

const setActiveItem = (selectedOption) => {
  const activesOptions = document.querySelectorAll(`.${selectedOption}`);
  options.forEach((option) => option.classList.remove("Active"));
  containers.forEach((container) => container.classList.remove("Active"));

  activesOptions.forEach((activeOption) =>
    activeOption.classList.add("Active")
  );
};
