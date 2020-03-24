/**
 * Copy text to user clipboard.
 */
const copyToClipboard = (text: string, focusRef?: React.RefObject<HTMLElement>) => {
    const selection = document.getSelection();
    if (!selection) return;
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
    }
    if (focusRef && focusRef.current) focusRef.current.focus();
};

export default copyToClipboard;
