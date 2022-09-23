export function antdPaginationAdapter(apiPagination) {
    return {
        current: apiPagination.page,
        total: apiPagination.total,
        pageSize: apiPagination.pageSize,
        showTotal: () => {
            return `每页${apiPagination.pageSize}条数据，共${apiPagination.total}条`;
        }
    };
}
export function validIntOrUndefined(value) {
    const num = Number.parseInt(value, 10);
    return !Number.isNaN(num) ? num : undefined;
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}