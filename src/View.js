const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
    <p>Simple Timer</p>
    <span>${minutes}:${seconds}</span>
    `;
  }
}

export { View };