const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planets: [],
			favlist: []
		},
		actions: {
			fetchcharacter() {
				fetch("https://3000-purple-bird-85pge3g8.ws-us03.gitpod.io/people/")
					.then(response => response.json())
					.then(result => setStore({ personajes: result }))
					.catch(error => console.log("error", error));
			},
			fetchplanets() {
				fetch("https://3000-purple-bird-85pge3g8.ws-us03.gitpod.io/planets/")
					.then(response => response.json())
					.then(result => setStore({ planets: result }))
					.catch(error => console.log("error", error));
			},
			favFunction: name => {
				let token = sessionStorage.getItem("my_token");

				fetch("https://3000-purple-bird-85pge3g8.ws-us03.gitpod.io/favorites", {
					method: "POST",
					headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
					body: JSON.stringify({ name: name })
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ favlist: data });
					})
					.catch(err => console.log("error", err));
			},
			favFunctionDelete: id => {
				let token = sessionStorage.getItem("my_token");

				fetch("https://3000-purple-bird-85pge3g8.ws-us03.gitpod.io/favorites", {
					method: "DELETE",
					headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
					body: JSON.stringify({ id: id })
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ favlist: data });
					})
					.catch(err => console.log("error", err));
			},
			setFavList: listFav => {
				setStore({ favlist: listFav });
			}
		}
	};
};

export default getState;
