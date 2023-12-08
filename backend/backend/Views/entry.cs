namespace backend.Views
{
    public class entry
    {
        public int EntryID { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? UserID { get; set; }
        public DateTime? Posted {  get; set; }
        public string? EntryLoc { get; set; }
        public double? EntryLong { get; set; }
        public double? EntryLat { get; set; }
    }
}
