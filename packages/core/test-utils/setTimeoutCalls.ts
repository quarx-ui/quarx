interface FakeSetTimeout {
    mock: {
        calls: Array<[() => void]>; // TODO Доработать типизацию
    };
}

/** При рендере jest использует setTimeout(_flushCallback, 0),
 * из-за чего проверка количества вызовов setTimeout происходит нестабильно.
 *
 * @return массив вызовов setTimeout без _flushCallback */
export const setTimeoutCalls = () => (setTimeout as unknown as FakeSetTimeout)
    .mock.calls
    .filter(([fn]) => !String(fn).includes('_flushCallback'));
