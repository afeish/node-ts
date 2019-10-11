## Skeleton for Node.js applications written in TypeScript

### Development

```bash
npm run dev
```

### Running tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Building a container

```bash
docker build .
```

### Export as an bundle

```bash
npm install loopback -g
slc build

git archive --format zip --output "node-ts.zip" deploy
```