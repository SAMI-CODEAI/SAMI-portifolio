const HeaderBar = () => (
  <div className="terminal-header px-4 py-3 flex items-center border-b border-green-500/30">
    <div className="text-green-300 text-sm font-light tracking-wide">home</div>
    <div className="flex-1"></div>
    <div className="text-green-300 text-xs font-light tracking-wide">
      {new Date().toLocaleDateString()}
    </div>
  </div>
);

export default HeaderBar;