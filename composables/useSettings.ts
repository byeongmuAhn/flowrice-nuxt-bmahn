export const useSettings = () => {
	const prismic = usePrismic()
	// return useAsyncData('$settings', () => prismic.client.getSingle('settings')).data
	return useAsyncData("$settings", () => {
		return prismic.client.getSingle("settings")
	}).data
  }