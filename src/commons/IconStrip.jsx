import asset from '../utils/asset';

export default function IconStrip({ items = [], speed = 22 }) {
    const shouldLoop = items.length > 5;
    const list = shouldLoop ? [...items, ...items] : items;

    return (
        <div className={`icon-strip ${shouldLoop ? 'is-loop' : ''}`}
            style={{ ['--speed']: `${speed}s` }}>
            <div className="icon-track">
                {list.map((it, i) => (
                    <a className="icon-item" href={it.url} key={`${it.name}-${i}`} target="_blank" rel="noreferrer"
                        title={it.name} aria-label={it.name}>
                        <img src={asset(it.icon)} alt={it.name} />
                        <span>{it.name}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}