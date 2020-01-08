/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} text
 * @return {string}
 */
const rle = (text) => {
    if (typeof text !== "string") {
        return;
    }

    const append = (char, entriesCount) => `${char}${entriesCount > 1 ? entriesCount : ""}`;

    const {encodedText, entriesCount, buffer} = text
        .split("")
        .reduce(({encodedText, entriesCount, buffer}, char) => {
            const isNewChar = char !== buffer;
            const bufferNotEmpty = !!buffer;

            return {
                encodedText: isNewChar && bufferNotEmpty ?
                    (`${encodedText}${append(buffer, entriesCount)}`) : encodedText,
                entriesCount: isNewChar && bufferNotEmpty ? 1 : ++entriesCount,
                buffer: char
            };
        }, {
            encodedText: "",
            entriesCount: -1,
            buffer: ""
        });

    return `${encodedText}${append(buffer, entriesCount)}`;
};

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
