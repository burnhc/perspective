const worker = perspective.worker();

async function main() {
    const arrow = await fetch("../../arrow/superstore.arrow");
    const table = await worker.table(await arrow.arrayBuffer());

    const viewers = document.getElementsByTagName("perspective-viewer");
    for (viewer of viewers) {
        viewer.load(table);
        viewer.toggleConfig();
    }
}

main();
