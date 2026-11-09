import PropTypes from 'prop-types'

// Visible placeholder for content Trevor still has to confirm or supply.
// Search the repo for "TODO(Trevor)" to find every one.
export default function Todo({ children }) {
  return (
    <span className="inline-block rounded-md border border-dashed border-[#b53406] bg-[#fff1e8] px-2 py-1 font-mono text-xs leading-snug text-[#8a2f06]">
      TODO (Trevor): {children}
    </span>
  )
}

Todo.propTypes = { children: PropTypes.node }
