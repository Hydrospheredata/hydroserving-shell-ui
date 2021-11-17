image:
	docker build -t hydrosphere/shell-ui:latest .

release: image
	docker push hydrosphere/shell-ui:latest
