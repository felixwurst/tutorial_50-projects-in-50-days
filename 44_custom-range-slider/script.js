const range = document.getElementById('range');

range.addEventListener('input', e => {
  const value = Number(e.target.value);
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(label).getPropertyValue('width');
  const thumbWidth = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--thumb-width');

  const rangeWidthNum = Number(rangeWidth.substring(0, rangeWidth.length - 2));
  const labelWidthNum = Number(labelWidth.substring(0, labelWidth.length - 2));
  const thumbWidthNum = Number(thumbWidth.substring(0, thumbWidth.length - 2));

  const max = Number(e.target.max);

  const left =
    value * ((rangeWidthNum - thumbWidthNum) / max) -
    (labelWidthNum - thumbWidthNum) / 2;

  label.style.left = `${left}px`;

  label.innerText = value;
});
