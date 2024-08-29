

const Text = ({ summaryText }) => {
    let val = summaryText;
    if (val) {
        val = val.replaceAll('-', '');
    }
    return (
        <div style={{ width: '90%', maxWidth: '700px', margin: '2rem auto' }}>{val}</div>
    );
};

export default Text;