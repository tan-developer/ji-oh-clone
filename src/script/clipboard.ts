const writeImgToClipBoard = async (text: string) => {
  navigator.clipboard.writeText(document.location.origin + text)
}

export default writeImgToClipBoard