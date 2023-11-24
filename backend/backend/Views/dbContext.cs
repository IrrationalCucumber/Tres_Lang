using System;
using System.Collections.Generic;
using backend.Models;
using backend.Views;
using Microsoft.EntityFrameworkCore;

namespace backend.Entities;

public partial class dbContext : DbContext
{
    public dbContext()
    {
    }

    public dbContext(DbContextOptions<dbContext> options)
        : base(options)
    {
    }

    //public virtual DbSet<Transaction> Transactions { get; set; }

    public virtual DbSet<user> Users { get; set; }
    public virtual DbSet<entry> Entry { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;uid=root;pwd=SethNL99*;database=abdb");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        /**
        modelBuilder.Entity<Transaction>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("transaction");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
        });
        */
        //save the info on the entered data to the db
        //for user account only
        modelBuilder.Entity<user>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("useraccount");

            entity.Property(e => e.Id).HasColumnName("userID");
            entity.Property(e => e.Fname)
                .HasMaxLength(45)
                .HasColumnName("userFname");
            entity.Property(e => e.Lname)
                .HasMaxLength(45)
                .HasColumnName("userLname");
            entity.Property(e => e.Password)
                .HasMaxLength(45)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(45)
                .HasColumnName("username");
            entity.Property(e => e.Age).HasColumnName("userAge");
            entity.Property(e => e.Bday)
                .HasColumnType("Date")
                .HasColumnName("userBday");
            entity.Property(e => e.Gender)
                .HasMaxLength(45)
                .HasColumnName("userGender");
        });

        modelBuilder.Entity<entry>(entity =>
        {
            entity.HasKey(e => e.entryID).HasName("PRIMARY");

            entity.ToTable("userEntry");

            entity.Property(e => e.entryID).HasColumnName("entryID");
            entity.Property(e => e.Title)
                .HasMaxLength(45)
                .HasColumnName("entryTitle");
            entity.Property(e => e.Description)
                .HasMaxLength(45)
                .HasColumnName("entryDesc");
            entity.Property(e => e.Location)
                .HasMaxLength(45)
                .HasColumnName("entryLoc");
            entity.Property(e => e.Type)
                .HasMaxLength(45)
                .HasColumnName("entryType");
            entity.Property(e => e.Date)
                .HasColumnType("Date")
                .HasColumnName("entryDate");
            entity.Property(e => e.Url)
                .HasMaxLength(45)
                .HasColumnName("entryUrl");
            entity.Property(e => e.DatePosted)
                .HasColumnType("Date")
                .HasColumnName("DatePosted");

        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
