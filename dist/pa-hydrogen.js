//#endregion
//#region src/elements/hydrogen/helpers.js
var { APP_NAME: e } = {
	APP_NAME: "paDiscoveryOsApp",
	API_ENDPOINT: "/apps/discoveryos",
	APP_READY_EVENT: "paDiscoveryOsApp:ready",
	PA_STORE_DATA_UPDATE_EVENT: "pa-store-data-update",
	PA_CONTEXT_UPDATED_EVENT: "pa-context-updated",
	PA_CONTEXT_READY_EVENT: "pa-context-ready",
	LOCAL_STORAGE_KEY: "pa-discoveryos-config",
	MAX_RETRIES: 6,
	RETRY_DELAY: 500,
	MAX_DELAY: 8e3,
	BACKOFF_FACTOR: 2
}, t = [
	"page_viewed",
	"product_viewed",
	"collection_viewed",
	"search_viewed",
	"cart_viewed",
	"cart_updated",
	"product_added_to_cart",
	"product_removed_from_cart"
];
function n(e) {
	return e ? e.split("/").pop() ?? null : null;
}
function r(t) {
	!t || typeof t != "object" || (window[e] = window[e] || {}, window[e].storeData = {
		...window[e].storeData,
		...t
	});
}
//#endregion
export { t as BRIDGED_EVENTS, r as applyStoreDataPatch, n as parseProductRefId };
