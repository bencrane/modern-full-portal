# Restore Original Proposal Pages

The original proposal and payment instructions pages have been preserved as `.original.tsx` files.

## To Restore Original Content

Run these commands from the project root:

```bash
# Restore proposal page
mv src/pages/proposal/ProposalE30c2203.tsx src/pages/proposal/ProposalE30c2203.inactive.tsx
mv src/pages/proposal/ProposalE30c2203.original.tsx src/pages/proposal/ProposalE30c2203.tsx

# Restore payment instructions page
mv src/pages/proposal/ProposalConfirmed.tsx src/pages/proposal/ProposalConfirmed.inactive.tsx
mv src/pages/proposal/ProposalConfirmed.original.tsx src/pages/proposal/ProposalConfirmed.tsx
```

## To Switch Back to Inactive Message

```bash
# Switch proposal page to inactive
mv src/pages/proposal/ProposalE30c2203.tsx src/pages/proposal/ProposalE30c2203.original.tsx
mv src/pages/proposal/ProposalE30c2203.inactive.tsx src/pages/proposal/ProposalE30c2203.tsx

# Switch payment instructions to inactive
mv src/pages/proposal/ProposalConfirmed.tsx src/pages/proposal/ProposalConfirmed.original.tsx
mv src/pages/proposal/ProposalConfirmed.inactive.tsx src/pages/proposal/ProposalConfirmed.tsx
```

## File Reference

| File | Description |
|------|-------------|
| `ProposalE30c2203.tsx` | Currently active (inactive message) |
| `ProposalE30c2203.original.tsx` | Original proposal content |
| `ProposalConfirmed.tsx` | Currently active (inactive message) |
| `ProposalConfirmed.original.tsx` | Original payment instructions |
