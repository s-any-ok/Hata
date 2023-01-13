export function splitTextByDot(str: string) {
    return str.split(". ").join(".\n")
}