using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class Transaction
{
    public int Id { get; set; }

    public int? Amount { get; set; }

    public DateTime? Date { get; set; }
}
